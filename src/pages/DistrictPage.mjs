import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Selections from '../components/Global/Selections.mjs'
import District from '../components/DistrictPage/District.mjs'

function DistrictPage({selections, setSelections}){
    const history = useHistory()

    const dummyData = {}
    let years = [2018, 2019, 2020, 2021]
    let data = [
        {
            district: 1,
            district_data: {
                "100": [100, 100, 100, 100],
                "101": [101, 101, 101, 101],
                "102": [102, 102, 102, 102],
                "103": [103, 103, 103, 103],
            }
        },
        {
            district: 2,
            district_data: {
                "200": [200, 200, 200, 200],
                "201": [201, 201, 201, 201],
                "202": [202, 202, 202, 202],
                "203": [203, 203, 203, 203],
            }
        },
        {
            district: 3,
            district_data: {
                "300": [300, 300, 300, 300],
                "301": [301, 301, 301, 301],
                "302": [302, 302, 302, 302],
                "303": [303, 303, 303, 303],
            }
        },
        {
            district: 4,
            district_data: {
                "400": [400, 400, 400, 400],
                "401": [401, 401, 401, 401],
                "402": [402, 402, 402, 402],
                "403": [403, 403, 403, 403],
            }
        },
        {
            district: 5,
            district_data: {
                "500": [500, 500, 500, 500],
                "501": [501, 501, 501, 501],
                "502": [502, 502, 502, 502],
                "503": [503, 503, 503, 503],
            }
        },
        {
            district: 6,
            district_data: {
                "600": [600, 600, 600, 600],
                "601": [601, 601, 601, 601],
                "602": [602, 602, 602, 602],
                "603": [603, 603, 603, 603],
            }
        },
        {
            district: 7,
            district_data: {
                "700": [700, 700, 700, 700],
                "701": [701, 701, 701, 701],
                "702": [702, 702, 702, 702],
                "703": [703, 703, 703, 703],
            }
        },
    ]
    dummyData.years = years
    dummyData.data = data

    return (
        <div>
            <h1>District Page</h1>
            <Link to='/'>Home</Link>
            <Selections selections={selections}></Selections>
            <District district={dummyData.data[0].district} years={years} data={dummyData.data[0]} selections={selections} setSelections={setSelections}/>
        </div>
    )
}

export default DistrictPage