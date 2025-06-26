function Uncle() {

    let UncleName = "Anvith S G"

    function Childern() {
        let ChildName = "SRK"
        console.log(UncleName)
    }

    // console.log(ChildName) // Error

    Childern()

}

Uncle()

// Here the Concept is that :=
// Inner Function can get the values of the Outer Functions.
// Outer Function can not get the values of the Inner Functions.

//Real Life Anology :=
// Children can ask ice-cream with Uncle
// Uncle can not ask ice-cream with Children
