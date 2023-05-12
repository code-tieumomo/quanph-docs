import React from "react";

export function HTMLTagPreview() {
    return (
        <section>
            <iframe style={{ width: "100%", minHeight: "50rem" }} src="https://devdocs.io/html/element"></iframe>
            <iframe style={{ width: "100%", minHeight: "50rem" }} src="https://htmlreference.io/"></iframe>
        </section>
    );
}
