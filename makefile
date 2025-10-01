.PHONY: install build serve clean pwa-build

# --- Variables ---
BACKEND_DIR := backend
# For simplicity, assuming a standard React/Vite build output
DIST_DIR := dist

# --- Main Targets ---

install:  # Install all project dependencies
	@echo "Installing client dependencies..."
	npm install
	@echo "Installing backend dependencies..."
	npm install --prefix $(BACKEND_DIR)

build:  # Build the client application
	@echo "Building client application..."
	npm run build
	@echo "Building PWA assets..."
	npx workbox generateSW workbox-config.cjs

serve:  # Start the backend server and client preview (for testing build)
	@echo "Starting backend server..."
	npm run start:backend &
	@echo "Starting client preview..."
	npm run preview

clean:  # Clean build artifacts
	@echo "Cleaning up build artifacts..."
	rm -rf $(DIST_DIR)
	rm -rf $(BACKEND_DIR)/node_modules
	rm -rf node_modules
