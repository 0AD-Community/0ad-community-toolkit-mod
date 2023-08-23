class GuiToolkit {
	/**
	 * @private
     * @param {keyof global} method
     * @param {(target: () => void, thisArg: any, argArray: any[]) => any} patch
     */
	static patchApply(method, patch) {
		global[method] = new Proxy(global[method], { "apply": patch });
	}

	/**
     * @param {() => void} patch
     */
	static init(patch) {
		this.patchApply("init", patch);
		Toolkit.log("GuiToolkit initialized");
	}

}


