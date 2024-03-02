// import "./Column.css";
// import { useStore } from "./store";
// export default function Column({ state }) {
//   const tasks = useStore(
//     (store) => store.tasks.filter((task) => task.state === state),
//     // shallow
//     (prev, next) => {
//       const longest = prev.length > next.length ? prev.length : next.length;
//       for (let i = 0; i < longest; i++) {
//         if (!prev[i] || !next[i]) return false;
//         if (prev[i] !== next[i]) return false;
//       }
//       return true;
//     }
//   );
// }
