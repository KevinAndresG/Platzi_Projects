#!/usr/bin/node
function YourPlan(User) {
  let my_dict = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expert_plus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  }
  const final = User.replace(" ", "_").toLowerCase()
  if (final in my_dict) {
    console.log(my_dict[final])
  }
}
YourPlan("Expert Plus")
