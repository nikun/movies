# MOVIES (meteor learning)


este proyecto es de prueba. sirve para ir aprendiendo METEOR.



## Configuraciones Sublime


Para poder configurar shorCut: preferences-> key bindings-user:<br>

    [
        { "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": false } },
        { "keys": ["ctrl+shift+x"], "command": "toggle_comment", "args": { "block": true } }
    ]

## Creacion de proyecto en sublime

crear un proyecto genera 2 archivos:<br>
* xxxxxxxx-sublime-project
* xxxxxxxx-sublime-workspace

xxxxxxxx-sublime-project --> aca se puede configurar plugins, como tambien preferencias propias. ejemplo:

    {
        "folders":
        [
            {
                "path": "/home/nicolas/Dev/pruebasMeteor/movies",
                "folder_exclude_patterns": [".meteor"]
            }
        ],
        "settings":
        {
            "tab_size": 2,
            "todo":
            {
                "folder_exclude_patterns": [".meteor", "vendor", "tmp"],
                "patterns": { "BUG": "BUG[\\s]*?:+(?P<bug>.*)$" },
                "case_sensitive": true,
                "result_title": "TODO Results"
            }
        }
    }

<br>
en esta configuracion estoy excluyendo la carpeta .meteor para que Sublime no la incluya en las busquedas y tambien la saco del plugin sublimeTodo, tambien a este plugin le agrego un pattern mas.

## Plugins utilizados

* sublimeLinter: chequear errores de javascript (con show error list los ves)
* jsFormat--> alf+f: formatea el codigo .js y json. Lo indenta tambien
* sublimeTodo: levanta los TODO;NOTE
* bracketHighlighter: ayuda a visualizar mejor las llaves,etc
* HTMLBeauty: le agrega los autocomplete de tags html
* SideBarEnchancemnt y SyncedSideBar: menu contextual a la barra del costado y en esta barra tambien resalta el archivo que estas tocando


