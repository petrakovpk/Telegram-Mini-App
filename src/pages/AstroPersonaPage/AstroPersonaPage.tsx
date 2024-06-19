import { Component } from "solid-js";
import { onMount } from "solid-js";

import './AstroPersonaPage.css'
import {Page} from "@/components/Page/Page.js";

export const AstroPersonaPage: Component = () => {
  onMount(() => {
    console.log("Hello AstroPersonPage!");
  })

  return (
    <Page title="AstroPersona">

    </Page>
  )
}
