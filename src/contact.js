const ContentContainer = document.querySelector("#content")

const ContactCreation = () => {
    const contact  = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
    <h1>Contact The Golden Palace Dragon!<h1>
    <div class="contacts">
        <h2>Head Chef: Zhang Wei </h2>
        <p>704-123-4567<p>
        <p>ChefZhangWei@X.com<p>
    </div>
    <div class="contacts">
        <h2>Owner Zuko Chyung<h2>
        <p>704-567-8910<p>
        <p>ZukoChyung@X.com<p>
    </div>
`
ContentContainer.appendChild(contact)
}
export {ContactCreation};