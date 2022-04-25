import React from "react";

function DistrictTable({years, data, caption}){
    let tags = Object.keys(data.district_data)
    
    return (
        <div>
            <table>
                <caption>{caption}</caption>
                <thead>
                    <tr>
                        <th>Tag Num</th>
                        {
                            years.map((year) => {
                                return(<th key={year}>{year}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {tags.map((tag, index) => {
                        return (
                            <tr key={tag}>
                                <td key={index}>{tag.toString()}</td>
                                {
                                    data.district_data[tag.toString()].map((datapoint, index) => {
                                        return(<td key={index}>{datapoint}</td>)
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default DistrictTable