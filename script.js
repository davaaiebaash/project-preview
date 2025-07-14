
function generateCase() {
    const title = document.getElementById("projectTitle").value;
    const spec = document.getElementById("specialization").value;
    const desc = document.getElementById("description").value;
    const solution = document.getElementById("solution").value;
    const result = document.getElementById("result").value;
    const skills = document.getElementById("skills").value;

    const output = `1. Название проекта: ${title}
2. Специализация: ${spec}
3. Описание проекта:
${desc}

4. Решение:
${solution}

5. Результат:
${result}

6. Работа выполнена: Индивидуально
7. Превью проекта: [см. HTML-обложку]
8. Отзыв: [по желанию добавить]
9. Навыки: ${skills}
`;

    document.getElementById("output").innerText = output;
}
