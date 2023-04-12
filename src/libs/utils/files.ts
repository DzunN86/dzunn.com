import fs from "fs";
import path from "path";

const pipe =
  (...fns: ((x: any) => any)[]) =>
  (x = null) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = (input = []) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn: (x: any) => any) => (input: any[]) => input.map(fn);

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath: string) =>
  path.join(prefix, extraPath);

const getAllFilesRecursively = (folder: any) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export default getAllFilesRecursively;
