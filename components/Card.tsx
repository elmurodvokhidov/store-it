import { Models } from "node-appwrite";

export default function Card({ file }: { file: Models.Document }) {
    return (
        <div>{file.name}</div>
    )
}