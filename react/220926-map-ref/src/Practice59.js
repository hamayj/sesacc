import React, { useState } from 'react';

function Practice59() {
    const [list, setList] = useState([]);
    const [result, setResult] = useState([]);

    function writeList() {
        let form = document.getElementById("form_write");
        let newList = {
            writer: form.writer.value,
            title: form.title.value
        };

        setList([])
    }
}