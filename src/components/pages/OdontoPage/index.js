import React from "react"
import Headerhome from "../../Headerhome"
import Listgroup from "../../Listgroup"
import Dentalrecordform from '../../Dentalforms/Dentalrecordform';
import Dentalform from '../../Dentalforms/Dentalform'
import Dentaltratamentform from '../../Dentalforms/Dentaltratamentform';
import { useState } from "react";
import Oralexamform from '../../Dentalforms/Oralexamform'
import { StateMachineProvider } from 'little-state-machine';
import './odontopage.css'
export default function OdontoPage() {
    const [formStep, setFormstep] = useState(1)

    const handleClick = () => {
        setFormstep(formStep + 1)
    }

    const handleClickBack = () => {
        setFormstep(formStep - 1)
    }



    return (
        <div className="content-odontopage">

            <div>

                <Listgroup />
            </div>
            <div className="content">
                <Headerhome />
                <StateMachineProvider>

                    <div id="content-odontoform">
                        {
                            (() => {
                                switch (formStep) {
                                    case 1:
                                        return <Dentalrecordform nextstep={handleClick} />
                                    case 2:
                                        return <Dentalform nextstep={handleClick} back={handleClickBack} />
                                    case 3:

                                        return <Dentaltratamentform nextstep={handleClick} back={handleClickBack} />
                                    case 4:
                                        return <Oralexamform  back={handleClickBack} />

                                    default:
                                        return <Dentalrecordform nextstep={handleClick} />
                                }
                            })()}
                    </div>

                </StateMachineProvider>
            </div>
        </div>
    )
}
