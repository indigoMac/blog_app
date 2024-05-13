import { Application } from "@hotwired/stimulus"
import "./confirm" // Assuming the file is named confirm.js

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
