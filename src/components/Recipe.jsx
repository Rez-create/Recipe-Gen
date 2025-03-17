import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Recipe Gen recommends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}