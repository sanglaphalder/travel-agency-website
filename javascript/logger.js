/**
 * Production Logger Utility
 * 
 * Provides a controlled logging system that only logs in development mode.
 * In production (when NODE_ENV !== 'development'), all logs are silently ignored.
 * 
 * Usage:
 *   import Logger from './logger.js';
 *   Logger.log('Message'); // Only logs if in development
 *   Logger.error('Error'); // Only logs if in development
 *   Logger.warn('Warning'); // Only logs if in development
 */

class Logger {
    constructor() {
        // Detect environment: development mode enabled by URL parameter or localStorage flag
        this.isDev = window.location.search.includes('debug=true') || 
                     localStorage.getItem('debug_mode') === 'true';
    }

    log(...args) {
        if (this.isDev) {
            console.log(...args);
        }
    }

    error(...args) {
        if (this.isDev) {
            console.error(...args);
        }
    }

    warn(...args) {
        if (this.isDev) {
            console.warn(...args);
        }
    }

    /**
     * Enable debug mode (logs will show)
     */
    enableDebug() {
        this.isDev = true;
        localStorage.setItem('debug_mode', 'true');
        this.log('🔧 Debug mode enabled');
    }

    /**
     * Disable debug mode (logs will be silent)
     */
    disableDebug() {
        this.isDev = false;
        localStorage.removeItem('debug_mode');
    }
}

// Export as singleton
export default new Logger();
