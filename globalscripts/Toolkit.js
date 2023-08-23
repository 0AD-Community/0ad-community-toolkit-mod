class Toolkit {
	/**
     * @param {unknown} message
     */
	static log(message) {
		if (typeof message === "object")
		{
			message = JSON.stringify(message, null, 2);
		}
		print(`${message}\n`);
	}
}

