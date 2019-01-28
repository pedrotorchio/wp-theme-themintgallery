const TITLE = "The Mint Gallery"
export function addMeta(name, content, joiner = (nC, cC) => `${nC} ${cC}`) {
    let { meta, newContent, currentContent } = makeMeta(name, content)

    if (meta)
        meta.content = joiner(newContent, currentContent).join(',');

    return meta;
}
export function setMeta(name, content) {

    let { meta, newContent } = makeMeta(name, content)

    if (Array.isArray(newContent))
        newContent = newContent.join(',');

    if (meta)
        meta.content = newContent

    return meta;
}

export function makeMeta(name, content) {
            
    let meta = document.querySelector(`meta[name="${name}"]`),
        currentContent = null,
        newContent = content

    if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.getElementsByTagName('head')[0].appendChild(meta);
    } else {
        currentContent = meta.content
    }

    if (!Boolean(content)) {
        meta.parentNode.removeChild(meta);    
        meta = null

    } else if (Array.isArray(content)) {

        if (currentContent)
            currentContent = currentContent.split(',');
        else
            currentContent = []
    }

    return { meta, newContent, currentContent }
}

export function setTitle(title) {
    document.title = `${title || "Bristol Art Gallery"} - ${TITLE}`;

    return document.title
}