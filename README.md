
# Librairie Modal

La librairie Modal est une composante réutilisable pour afficher des modales sur votre application.

## Installation

Pour installer la librairie Modal, vous pouvez l'ajouter à votre projet en utilisant npm ou yarn. Exécutez l'une des commandes suivantes dans votre terminal, en fonction de votre gestionnaire de paquets préféré :

Avec npm :

```bash
npm install oc-modal-faradji-boucif --save
```

Avec yarn :

```bash
yarn add oc-modal-faradji-boucif --save
```

## Utilisation

Suivez les étapes ci-dessous pour intégrer la modal à votre application :

1. Importez la librairie Modal dans votre fichier JavaScript/React :

```javascript
import Modal from 'oc-modal-faradji-boucif'
```

2. Utilisez la composante Modal dans votre code :

```javascript
function App() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {/* Votre contenu d'application ici */}
            <button onClick={openModal}>Ouvrir la modal</button>

            <Modal
                id="ma-modal"
                show={showModal}
                close={closeModal}
                style={{ /* Vos styles personnalisés pour la modal */ }}
                title="Titre de la modal"
                message="Contenu de la modal ici"
            />
        </div>
    );
}

export default App;
```

3. Maintenant, lorsque vous cliquez sur le bouton "Ouvrir la modal", la modal devrait s'afficher avec le titre et le contenu spécifiés.

## Propriétés

La composante Modal prend en charge les propriétés suivantes :

- `id` (obligatoire) : l'identifiant de la modal (doit être unique).
- `show` (obligatoire) : un booléen pour afficher ou masquer la modal.
- `close` (obligatoire) : un booléen pour fermer la modal. (définir `show` sur `false`).
- `style` (facultatif) : les styles personnalisés à appliquer à la modal.
- `title` (facultatif) : le titre de la modal.
- `message` (facultatif) : le contenu de la modal.

## Contributions

Les contributions sont les bienvenues ! Si vous trouvez des problèmes ou si vous souhaitez ajouter des fonctionnalités à la librairie Modal, n'hésitez pas à ouvrir une issue ou à proposer une pull request sur le dépôt GitHub de la librairie.

## Licence

Cette librairie est sous licence MIT. Veuillez consulter le fichier `LICENSE` pour plus d'informations.
