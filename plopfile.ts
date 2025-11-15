import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("module", {
    description: "Generate a React TypeScript module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Module name:"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/modules/{{kebabCase name}}/{{kebabCase name}}.tsx",
        template: `
import React from "react";
import styles from "./{{kebabCase name}}.module.css";

export default function {{pascalCase name}}() {
  return (
    <div className={styles.container}>
      {{pascalCase name}} module
    </div>
  );
}
        `
      },
      {
        type: "add",
        path: "src/modules/{{kebabCase name}}/{{kebabCase name}}.module.css",
        template: `
.container {
  /* Styles for {{pascalCase name}} */
}
        `
      }
    ]
  });
}
