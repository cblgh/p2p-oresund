document.addEventListener("DOMContentLoaded", function(){
    console.log("hey load me:")
    if (window.location.hash) {
        var tag = decodeURI(window.location.hash.substr(1))
        filter(tag)
    }
})

function filter(tag) {
    window.location.hash = tag
    var filterTag = document.querySelectorAll('[data-tag]')
    for (var attr in filterTag) if (filterTag.hasOwnProperty(attr)) {
        var el = filterTag[attr]
        if (el.getAttribute("data-tag") === tag) {
            el.classList.add("hilight")
        } else {
            el.classList.remove("hilight")
        }
    }

    var entries = document.querySelectorAll('[data-tags]')
    for (var attr in entries) if (entries.hasOwnProperty(attr)) {
        var el = entries[attr]
        var tags = el.getAttribute("data-tags").split("|")
        if (tags.indexOf(tag) < 0) {
            el.style = "display: none;"
        } else {
            el.style = "display: inline-block"
        }
    }
}

function clearTags() {
    window.location.hash = ""
    var entries = document.querySelectorAll('[data-tags]')
    var filterTag = document.querySelectorAll('[data-tag]')
    for (var attr in entries) if (entries.hasOwnProperty(attr)) {
        var el = entries[attr]
        var tags = el.getAttribute("data-tags").split("|")
        el.style = "display: inline-block"
    }
    for (var attr in filterTag) if (filterTag.hasOwnProperty(attr)) {
        var el = filterTag[attr]
        el.classList.remove("hilight")
    }
}

document.addEventListener("DOMContentLoaded", function(event) { })
