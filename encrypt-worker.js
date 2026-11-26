import buffer from "https://cdn.jsdelivr.net/npm/safe-buffer/+esm";
import {
  WASI,
  init,
} from "https://cdn.jsdelivr.net/npm/@wasmer/wasi@1.2.2/dist/Library.esm.js";

Object.assign(globalThis, { Buffer: buffer.Buffer });

self.onmessage = async ({ data: { text, recipients } }) => {
  try {
    await init();
    const moduleBytes = await fetch("vendor/age-1.2.0.wasm");
    const module = await WebAssembly.compileStreaming(moduleBytes);
    const wasi = new WASI({
      args: [
        "age",
        "--armor",
        ...recipients.flatMap((recipient) => ["--recipient", recipient]),
      ],
      env: {},
    });
    wasi.setStdinString(text);
    await wasi.instantiate(module, {});
    const exitCode = wasi.start();
    const stdout = wasi.getStdoutString();
    const stderr = wasi.getStderrString();
    self.postMessage({ stdout, stderr, exitCode });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
