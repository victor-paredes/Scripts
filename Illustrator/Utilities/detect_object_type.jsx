#target illustrator

// Check if there is an active document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    
    // Check if there is a selection
    if (doc.selection.length > 0) {
        var selectedObject = doc.selection[0];
        
        // Get the type of the selected object
        var objectType = selectedObject.typename;
        
        // Show the type in an alert
        alert("Selected object type: " + objectType);
    } else {
        alert("No object is currently selected.");
    }
} else {
    alert("There is no active document.");
}
