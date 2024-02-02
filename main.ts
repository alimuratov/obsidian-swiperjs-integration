import { ItemView, WorkspaceLeaf } from "obsidian";
import { Plugin } from 'obsidian';

import Component from "./Component.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export default class ExamplePlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("swiperjs", (source, el, ctx) => {
			const rows = source.split("\n").filter((row) => row.length > 0);
			let fullpathArray = [];
			for (let j = 0; j < rows.length; j++) {
				let fullPath = this.app.vault.adapter.getResourcePath(rows[j]);
				fullpathArray.push(fullPath);
				console.log(fullPath);
			}
			console.log(fullpathArray);
			new Component({
				target: el,
				props: {
					imageURLs: fullpathArray,
				}
			})
		});
	}
	async onunload() {
		// this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
	  }
  }