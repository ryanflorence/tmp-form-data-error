import { installGlobals } from "@remix-run/node";
import "@testing-library/jest-dom";
import { JSDOM } from "jsdom";

installGlobals()

const jsdom = new JSDOM(`<!doctype html>`);
globalThis.FormData = jsdom.window.FormData;
