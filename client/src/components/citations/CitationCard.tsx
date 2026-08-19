import type { CitationCardProps } from "../types/citationCardProps"
import "./citation.css"
import { CitationTable } from "./CitationTable"

export const CitationCard = ({ citation }: CitationCardProps) => {


    // this would be something like
    // if (type 1) paragraph, if (type 2) table

    //could probably do something like a csv format for tables, with like column,row,content1,content2 and so on

    if (citation.formatType === 1) {
        return (
            <div className="citationCard-container">
                <div>
                    {citation.citationContent}
                </div>
            </div>
        )
    } else if (citation.formatType === 2) {
        return (
            <div className="citationCard-container">
                <CitationTable
                    citation={citation}
                />
            </div>
        )
    } else {
        <div className="citationCard-container">
            <div>no format type found</div>
        </div>
    }
    
}