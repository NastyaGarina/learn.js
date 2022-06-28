let ask = (question, yes, no) => confirm(question) ? alert(yes) : alert(no) ;
ask("Вы согласны?", "Вы согласились.", "Вы отменили выполнение.");
