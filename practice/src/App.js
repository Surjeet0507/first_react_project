// function Profile(){
//   return (<h2>my name is surjeet singh</h2>
// )}
// export default function Gallery(){
//   return (
//     <section>
//       <h2>my profile</h2>
//       <Profile />
//       <Profile />
//     </section>
//   )
// }
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}