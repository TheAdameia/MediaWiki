import type { CitationCardProps } from "../types/citationCardProps"
import "./citation.css"

export const CitationCard = ({ citation }: CitationCardProps) => {


    return (
        <div className="citationCard-container">
            <div>
                {citation.citationContent}
            </div>
        </div>
    )
}