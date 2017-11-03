# MEMORIA PROYECTO VETERINARIA DOOGIE

# Fullstack 
# MongoDB+Express+AngularJS+NodeJS

![Vista principal aplicación](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image6.jpg)

- - - -
# Diagrama de Arquitectura
![Diagrama de Arquitectura](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image2.png)

![Diagrama de Arquitectura](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image11.jpg)


**HTTP utiliza el patrón de request / response (petición / respuesta)**, lo cual quiere decir, que un **CLIENTE realiza una solicitud (request)** y un **SERVIDOR responde (response)** a dicha solicitud.

HTTP Response, es la respuesta que devuelve un servidor web luego de recibir y procesar una solicitud HTTP.

**Métodos (o verbos) de  HTTP REQUEST**

**GET** : Para **realizar consultas**. Es el Read del CRUD. Las solicitudes GET no deben tener un cuerpo (body request).

**POST**: Para **añadir o crear** recursos . Es el Create del CRUD. Las solicitudes POST deben tener un cuerpo (body request).

**PUT**: Para **editar** recursos. Es el Update del CRUD. El método  PUT y PATCH deben tener un cuerpo (body request).

**DELETE** : Para **borrar o eliminar** recursos. Es el Delete del CRUD. Las solicitudes  DELETE no debe tener un cuerpo (body request).


# COMPONENTES DE LA ARQUITECTURA

* **El navegador** : Es un software instalado en el lado del cliente que nos sirve para interpretar la información que recibimos del servidor mediante comunicaciones HTTP.

* **AngularJS**: Es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web. 

* **La nube de Internet**: Es el medio por el que se transmiten las conexiones HTTP.

* **El servidor físico**: En nuestro servidor físico es una máquina donde podremos instalar NodeJS.

* **NodeJs**: Es una plataforma que se usa principalmente para desarrollar aplicaciones web usando JavaScript en el servidor (en el backend). Está desarrollada por Google, es de código abierto y utiliza el motor V8 de Google.

* **Express** : Se trata de un framework web para NodeJS.

* **Mongoose**: Se trata de una librería que utilizamos para conectar node.js con nuestra base de datos en MongoDB.

* **MongoDB** . Se trata de una Base de Datos del tipo noSQL, que guarda los documentos, que son son almacenados en BSON (JSON en binario).

- - - -
# EL PROYECTO: CLINICA VETERINARIA

El proyecto consiste en una aplicación web para la gestión interna de una clínica veterinaria. En esta aplicación podremos gestionar las citas de los clientes, así como almacenar los datos de clientes y mascotas

> ## DEMO ONLINE DE LA APLICACIÓN

> <https://doogivet.herokuapp.com> 


## MODELO DE DATOS

![Modelos de datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image5.png)

## DIAGRAMA DE FLUJO CLIENTES-MASCOTAS: 
Diagrama de flujo que representa cómo se dan de alta Mascotas y Clientes en la aplicación.

![Modelos de datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image4.png)

## DIAGRAMA DE FLUJO CALENDARIO-CITAS
Diagrama de flujo que representa cómo se dan de alta Citas en el calendario y horario de citas
![Modelos de datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image1.png)


# SERVICIOS REST PUBLICADOS
Esta es una lista completa de los servicios web REST publicados con ExpressJS.

| Metodo  |  URL  |  Body  |  Response |
|---|---|---|---|
|  GET  |  api/customers  |  vacio  |  ARRAY |
|  GET  |  api/customers/:id  |  vacio  |  JSON |
|  GET  |  api/customers/:id/pets  |  vacio  |  JSON |
|  POST  |  api/customers  |  JSON  |  JSON |
|  PUT  |  api/customers/:id  |  JSON  |  JSON |
|  GET  |  api/pets/:id  |  vacio  |  JSON |
|  POST  |  api/pets  |  JSON  |  JSON |
|  PUT  |  api/pets/:id  |  JSON  |  JSON |
|  DELETE  |  api/pets/:id  |  vacio |  res.sendStatus(200/500)  |
|  GET  |  api/appointments  |  vacio  |  JSON |
|  GET  |  api/appointments/:id  |  vacio  |  JSON |
|  GET  |  api/appointments/:fromdate/:todate  |  << vacio >>  |  JSON |
|  POST  |  api/appointments  |  {JSON}  |  JSON |
|  PUT  |  api/appointments/:id  |  {JSON}  |  JSON |
|  DELETE  |  api/appointments/:id  |  vacio  |  res.json(updateAppointment) |


Ficheros en mi proyecto encargados de publicar las rutas rest
* https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/routes/customers.js
* https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/routes/pets.js
* https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/routes/appointments.js


# PANTALLAS DE LA APLICACIÓN 

La aplicación web cuenta con diferentes pantallas o ventanas. Para ello tenemos una página llamada index.html con el menú lateral de navegación y la parte superior. 

Este *index.html* se encuentra en la carpeta *public*:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/index.html 

En el cuerpo es donde mostraremos las diferentes *vistas* gracias a la *directiva de angular ng-view*.

![Pantalla principal](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image3.jpg)

La gestión de las rutas, vistas y controladores la hacemos en el archivo app.config situada en public/app.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/app.config.js 


## Pantalla principal
En la pantalla principal he optado por mostrar directamente el calendario de citas del mes en curso.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/appointmentsCalendar 

![Pantalla principal](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image6.jpg)

## Citas de cada día
El pulsar en el calendario sobre el número de citas de un día, se abre la vista de citas del día en concreto, con un listado de horas.

En realidad esta vista engloba otras dos vistas hijas. A la izquierda la vista con el listado de medias horas y a la derecha una vista con la visualización y edición de la propia cita. Para ver esta vista, hay que hacer click en los iconos que hay en la lista de cada media hora reservable.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/appointments 

![Citas de cada día](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image6.jpg)

## Lista de clientes
He diseñado una vista para mostrar la lista de clientes de la veterinaria, que se pueden filtrar desde un input.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/customers 

![Lista de clientes](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image12.jpg)

## Detalle clientes y sus mascotas
Al clicar sobre un cliente, se abrirá su ficha. Dentro de la misma se mostrarán además de sus datos su lista de clientes.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/customer 

![Detalle clientes y sus mascotas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image8.jpg)

## Ficha Detalle Mascotas
Al clicar sobre la mascota, podrás acceder a la vista de la ficha de la mascota.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/pet 

![Detalle clientes y sus mascotas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image10.jpg)

## Lista de mascotas
Y por último, una vista para listar todas las mascotas clientes de la clínica.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/pets/pets.html

![Detalle clientes y sus mascotas](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/Miki/master/public/assets/img/image7.jpg)

#IMPLEMENTACIÓN

##Configuración general

Estos son los archivos donde aparecen las configuraciones del proyecto 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/app.config.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/app.module.js 


## Schemas de MongoDB para mi aplicación

En mi proyecto he incorporado 3 colecciones (customers, pets y appointments) con sus modelos. Estos modelos los creamos usando Mongoose y con ellos podremos guardar la información en la base de datos MongoDB siguiendo el esquema del modelo.

Las he incorporado a la carpeta Models. Estos son los enlaces:

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/models/customer.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/models/pet.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/models/appointment.js 


Hacemos referencia a ellos (con un request) cada vez que quiero utilizarlos.  
Por ejemplo, en Routes/Customer usamos los modelos Pets y Customer:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/ed8501f9d98ef8dc9b8dbf5a40eb40f28795bc21/routes/customers.js#L3
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/ed8501f9d98ef8dc9b8dbf5a40eb40f28795bc21/routes/customers.js#L4 


## Servicios REST

Un enlace a la línea donde está la definición de la url REST
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/e4dce2ec5c5800b8e1320703b0b8286890da73c1/routes/pets.js#L6


## Controlador Angular

### Componente.js
Este es un ejemplo de componente js que he utilizado en el proyecto, en este caso para mostrar la vista de mascota

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/pet/pet.component.js 

### Componente.html
Este es un ejemplo de componente html que he utilizado en el proyecto, en este caso para mostrar la vista de mascota
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/pet/pet.html 

### Configuración del Módulo
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/e4dce2ec5c5800b8e1320703b0b8286890da73c1/public/app/pet/pet.component.js#L11 


### Ruta Angular
Mis rutas angular están en 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/app.config.js

Un ejemplo es esta ruta, que nos muestra la vista de clientes.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/app.config.js#L13 

### Ficheros <script> incluidos en el index.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/e4dce2ec5c5800b8e1320703b0b8286890da73c1/public/index.html#L46 


## DatePicker : 720kb.datepicker

Para tomar y elegir una fecha en los formularios (en un input) usó la directiva de Angula llamada DatePicker, por ejemplo en el formulario de alta de mascotas:  
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/pet 

La doc de esta directiva la encontrarás en
https://github.com/720kb/angular-datepicker 

Instalamos en nodejs   →  npm install angularjs-datepicker --save

Añado estas líneas en el head de index.html 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/index.html#L41 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/index.html#L42 

Añado  la dependencia en  app.module.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/app.module.js#L6 
 
Y llamo a la directiva con <datepicker></datepicker> en el html, por ejemplo en https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/pet/pet.html#L66 

## Validaciones
En nuestro proyecto hemos realizado validaciones a nivel de servidor con la librería javascript  VALIDATE JS (https://validatejs.org/) . 
Para utilizarla ponemos su cdn en index.html e instalamos en nodejs con -> npm install --save validate.js
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/index.html#L37 

En un archivo js llamado validations y situado en public/app/validation creamos nuestras validaciones
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/validation/validations.js 

Estás validaciones las usaremos para los formularios de pets y customers. 
Ej: https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/pet/pet.component.js#L26 


## Servicios AngularJS con Promesas
Facilita la reutilización de funciones inyectando el servicio en diferentes componentes.
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/services/pets-services.js
 

## Servicios de AngularJS con Resource
Creamos un servicio, "service" en Angular, con factory y resource. Usamos $resource en lugar de $http.

Para utilizar Resource n el index.html debemos agregar el link al archivo js:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/index.html#L33 

Creamos el servicio en nuestra carpeta de servicios:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/services/customers-services.js 

Y lo utilizo por ejemplo en :
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/customer/customer.component.js#L19 

## Directivas en Angular
Las directivas vienen a ser la forma en la que extendemos nuestro HTML, permiten agregar desde pequeños trozos de código hasta una funcionalidad completa.
En Angular existe una gran lista de directivas nativas que podremos usar, cuyo nombre empieza por ng- 
En el proyecto he usado un buen puñado de ellas: ng-app, ng-controller, ng-model, ng-click, ng-repeat, ng-show,...

Además he creado unas directivas propias, que he añadido en un archivo credo en la carpeta directives:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/app/directives/htmldirectives.js 

Por ejemplo he creado la directiva formularios
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/directives/htmldirectives.js#L5 

Que uso por ejemplo en:
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/customer/customer.html#L26 
 

## Eventos en AngularJS - Componentes anidados

En angularjs tenemos una forma muy sencilla de manejar los eventos que suceden en nuestras aplicaciones gracias a $broadcast, $emit y $on. 

Con $emit y $broadcast lanzamos los eventos y con $scope.$on los capturamos.

En el proyecto lo usamos en la parte de citas (appointment). He creado un controlador y html padre que incluye dos módulos hijos, uno para mostrar la lista de citas del día (appointmentsday) y otro para mostrar los detalles de cada cita (appointmentDetail).

Son componentes anidados con eventos ya que el cambio el padre engloba a los hijos y es notificado de cualquier cambio en sus hijos y se encarga de refrescarlos.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/tree/master/public/app/appointments 

En diferentes partes de los controladores uso $broadcast, $emit y $on.
Ej: $emit → 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/appointments/appointmentsDay/appointmentsDay.component.js#L53 

Ej: $on →  https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/appointments/appointment.component.js#L12 
 
Ej: $broadcast  → 
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/appointments/appointment.component.js#L19 



# Instalando y configurando las conexiones de SocketIO
Socket.io es una librería que nos permite manejar eventos en tiempo real mediante una conexión TCP y todo ello en JavaScript.

Instalamos las conexiones de SocketIO en  NodeJS:
 npm install --save socket.io

Añadimos al index el CDN de la libreria socket.io <scriptsrc="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>

En app. js añadimos  --> app.io = require('socket.io')()
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/app.js#L16 

En bin/www añadimos   -->  /** Attach socket.io listener */app.io.attach( server );

Creamos un archivo html en public app llamado socketio.html
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/public/socketio.html 

Y un controlador llamado socketio-manager.js en la carpeta Routes
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/master/routes/socketio-manager.js 
 
Y hacemos las pruebas en nuestro controlador del calendario
https://github.com/Curso-Fullstack-MEAN-Octubre2017/Miki/blob/d9a2bfe78142156f4d982eff27bded540bbb7e57/public/app/appointmentsCalendar/appointmentsCalendar.component.js#L9 











