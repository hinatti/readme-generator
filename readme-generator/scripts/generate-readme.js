import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const TARGET_DIR = process.argv[2] || ".";

// Antigravity CLI を使ってエージェント実行
const command = `
antigravity run \
  --agent agent/readme.agent.md \
  --input ${TARGET_DIR}
`;

console.log("READMEを生成中...");
const result = execSync(command, { encoding: "utf-8" });

fs.writeFileSync("output/README.md", result);
console.log("README.md を output に生成しました");
