
import HandsOn1Intro from "../components/HandsOn1Intro"
import HandsOn1Step1 from "../components/HandsOn1Step1"
import HandsOn1Step2 from "../components/HandsOn1Step2"
import HandsOn1Step3 from "../components/HandsOn1Step3"

export const useHandsOn1 = () => {

    const handsOn1Components = [
        <HandsOn1Intro />,
        <HandsOn1Step1 />,
        <HandsOn1Step2 />,
        <HandsOn1Step3 />
    ]

    return {
        handsOn1Components
    }
}