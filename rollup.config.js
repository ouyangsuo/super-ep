import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import json from "@rollup/plugin-json";

const formatName = "SuperEp";

const config = {
   input: "./src/main.js",
   output: [
      {
         file: "./lib/bundle.cjs.js",
         format: "cjs",
         name: formatName,
         exports: "auto",
      },
      {
         file: "./lib/bundle.js",
         format: "iife",
         name: formatName,
         exports: "auto",
      },
   ],
   plugins: [
      json(),
      resolve(),
      vue({
         css: true,
         compileTemplate: true,
      }),
      babel({
         exclude: "**/node_modules/**",
      }),
      commonjs(),
      scss(),
   ],
};

export default config;
