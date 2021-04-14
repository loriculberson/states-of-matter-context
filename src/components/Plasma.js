
export default function Plasma ({elements}){
  console.log(elements)
  const elementList = elements.map(element => <li key={element.id}>{element.type} {element.name}</li>)
  return (
    <section>
      <h2>Elements</h2>
      <ul>{elementList}</ul>
    </section>
  )
}