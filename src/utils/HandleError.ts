export class HandleError {
    /**
     * Ensure the error is an instance of Error.
     * @param {unknown} error - The error to ensure.
     * @returns {Error} The error instance.
     */
    public static ensureError(error: unknown): Error {
        if (error instanceof Error) return error;

        let stringify: string = "Unable to stringify error.";

        try {
            stringify = JSON.stringify(error);
        } catch {
            // Nothing
        }

        return new Error(`An unexpected error occurred: ${stringify}`);
    }
}
