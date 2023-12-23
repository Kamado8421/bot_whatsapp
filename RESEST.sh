#!/bin/bash

clear

echo -e "\033[1;33mIMPORTANTE:\033[m Você deseja excluir a conexão atual?"
echo -e "\033[0;34m[ 1 ] - Sim\033[m"
echo -e "\033[0;32m[ 2 ] - Não\033[m"

read -p "Digite a opção desejada (1 ou 2): " opcao

if [ "$opcao" == "1" ]; then
    rm -r .\assets\auth\
    mkdir .\assets\auth

    echo "Conexão finalizada. Para reestabelecer uma nova dê: \033node index.js\033[m"
else
    echo "Não deletado"
fi
