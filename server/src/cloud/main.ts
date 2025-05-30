import { glob } from "glob";

async function importFiles() {
  const jsFiles = await glob(
    [
      __dirname + "/functions/**/*.{js,ts}",
      __dirname + "/triggers/**/*.{js,ts}",
    ],
    { withFileTypes: true }
  );
  jsFiles.forEach((file) =>
    import(file.fullpath()).then((module) => module.default)
  );
}

importFiles();
