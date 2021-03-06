/**
 * This interface represents a synchronous object store.
 * It allows to preload key-value-pairs and store them in a cache.
 *
 * WARNING: If not all required key-value-pairs are preloaded, the results of any call on a synchronous transaction
 * might be wrong. Only use synchronous variants, if unavoidable.
 * @interface
 */
class ISynchronousObjectStore {
    /**
     * Returns the object stored under the given primary key.
     * Resolves to undefined if the key is not present in the object store.
     * @abstract
     * @param {string} key The primary key to look for.
     * @returns {*} The object stored under the given key, or undefined if not present.
     */
    getSync(key) {} // eslint-disable-line no-unused-vars

    /**
     * Inserts or replaces a key-value pair.
     * @abstract
     * @param {string} key The primary key to associate the value with.
     * @param {*} value The value to write.
     */
    putSync(key, value) {} // eslint-disable-line no-unused-vars

    /**
     * Removes the key-value pair of the given key from the object store.
     * @abstract
     * @param {string} key The primary key to delete along with the associated object.
     */
    removeSync(key) {} // eslint-disable-line no-unused-vars

    /**
     * A check whether a certain key is cached.
     * @param {string} key The key to check.
     * @return {boolean} A boolean indicating whether the key is already in the cache.
     */
    isCached(key) {} // eslint-disable-line no-unused-vars
}
