/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// @ts-ignore
type CurrentLocale = string


declare namespace App {
  interface Locals {
    currentLocale: CurrentLocale
  }
}
