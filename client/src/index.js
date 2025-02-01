import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import Modal from "./components/Modal";
import "./css/style.css";

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
