window:extract()

local at = function(id)
    return document:getElementById(id)
end

local listen = function(id, event, callback)
    at(id):addEventListener(event, callback, false)
end

local pierre_likes = {
    lua = [[n00b! <a href="http://lua.2524044.n2.nabble.com/SAS-to-LUA-conversion-td6508727.html">It's "Lua"</a>.]],
    fsonrpc = "Yes! But not FSON.",
    ["environment variables"] = "Yes!",
}

local pierreProcessor = function(query)
    return query == "Lua" and "Yes!" or pierre_likes[query:lower()] or "No."
end

local hide_answer = function()
    local box = at("answer-box")
    box.className = box.className:gsub(" in$", "")
    box.className = box.className .. " out"
end

local show_answer = function()
    local box = at("answer-box")
    box.className = box.className:gsub(" out$", "")
    box.className = box.className .. " in"
end

local on_click = function()
    local answer = pierreProcessor(at("query").value)
    show_answer()
    at("answer").innerHTML = answer
end

local on_ready = function()
    listen("submit", "click", on_click)
    listen("query", "focus", hide_answer)
    listen("query", "change", hide_answer)
end

jQuery(document):ready(on_ready)

