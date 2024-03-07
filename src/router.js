class Router {
    constructor() {
      this.routes = {};
    }
  
    // Method to add a new route
    addRoute(path, handler) {
      this.routes[path] = handler;
    }
  
    // Method to navigate to a route
    navigate(path) {
      if (this.routes[path]) {
        this.routes[path]();
      } else {
        console.error("Route not found");
      }
    }
  }
  
  module.exports = Router;
  