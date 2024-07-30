import { useState, useEffect } from "react"


export default function Products() {
    const [glasses, setGlasses] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/glasses')
            const json = await response.json()
            setGlasses(json)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <p>
            Storytime Adventure: Visit a local library for storytime sessions. Many libraries in North Carolina offer interactive storytelling and activities for young children.

Farm Visit: Take a trip to a local farm or petting zoo. Many farms offer activities like feeding animals and picking fruits or vegetables.

Art and Craft Time: Set up an outdoor art station with washable paints, crayons, and paper. Let them create their own masterpieces in the fresh air.

Playground Fun: Visit different playgrounds in your area. Each playground has unique equipment that can provide new and exciting challenges.

Picnic and Play: Pack a picnic and head to a nearby park. After eating, play simple games like tag, hide and seek, or catch.

Water Play: On a hot day, set up a small kiddie pool, sprinkler, or water table in the backyard. Water balloons and squirt toys can also add to the fun.

Nature Crafting: Collect leaves, twigs, and flowers to create nature-inspired crafts. Make leaf rubbings or create collages with natural materials.

Music and Dance Party: Play their favorite songs and have a dance party at home. You can also introduce simple musical instruments like tambourines or maracas.

Gardening Together: Start a small garden together. Let them help with planting seeds, watering plants, and watching them grow.

Sensory Bins: Create sensory bins filled with rice, beans, or sand, and add small toys or objects for them to explore. This can provide hours of tactile fun.

Bubble Fun: Blow bubbles and let your child chase and pop them. You can also create giant bubbles using a homemade bubble solution and a bubble wand.

Visit a Children's Museum: Many cities in North Carolina have children's museums with interactive exhibits and play areas designed for young children.

Animal Charades: Act out different animals and have your child guess which one you are. Then switch roles and let them act out an animal for you to guess.

Simon Says: Play this classic game to practice listening skills and following directions.

These activities not only provide fun and entertainment but also help with their physical, cognitive, and social development.  
            </p>
            <ul>
                { glasses.map((glasses, index) => (
                    <li key={index} style={{paddingBottom: '25px'}}>
                        <div>{glasses.glasses_name}</div>
                        <div>${glasses.price}</div>
                        <div style={{whiteSpace: 'pre-wrap'}}>{glasses.features}</div>
                        <div style={{whiteSpace: 'pre-wrap'}}>{glasses.specifications}</div>
                    </li>
                ))}
            </ul>

        </div>
    )
}