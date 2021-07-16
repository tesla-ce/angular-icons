# TeSLA CE Icons

This library provides all icons to TeSLA CE project.

## Install

To install this library with npm:
```
npm install @tesla-ce/icons --save
```

It is necessary to import module in @NgModule:

```
import { IconsModule } from '@tesla-ce/icons';


@NgModule({
    ...,
    import:[
        ...,
        IconsModule
    ],
    ...        
})


```

## Use as Angular library

To use this library insert this code:

```
<tesla-icons icon="ICON_VALUE" status="ICON_STATUS" width="100" height="100" marginLeft="0" marginRight="0" marginTop="10" fill="full"></tesla-icons>
```

### Icon values:
| Value | Example |
|---|---|
| common-activity | ![common-activity](assets/icons/common/activity.svg "common-menu_logo") |
| common-authorship | ![common-authorship](assets/icons/common/authorship.svg "common-menu_logo") |
| common-connection | ![common-connection](assets/icons/common/connection.svg "common-connection") |
| common-content | ![common-content](assets/icons/common/content.svg "common-menu_logo") |
| common-course | ![common-course](assets/icons/common/course.svg "common-menu_logo") |
| common-dashboard | ![common-dashboard](assets/icons/common/dashboard.svg "common-dashboard") |
| common-delete | ![common-delete](assets/icons/common/delete.svg "common-menu_logo") |
| common-edit | ![common-edit](assets/icons/common/edit.svg "common-menu_logo") |
| common-identity | ![common-identity](assets/icons/common/identity.svg "common-menu_logo") |
| common-informed-consent | ![common-informed-consent](assets/icons/common/informed-consent.svg "common-menu_logo") |
| common-integrity | ![common-integrity](assets/icons/common/integrity.svg "common-menu_logo") |
| common-menu_logo | ![common-menu_logo](assets/icons/common/menu_logo.svg "common-menu_logo") |
| common-monitoring | ![common-monitoring](assets/icons/common/monitoring.svg "common-menu_logo") |
| common-moreinfo | ![common-moreinfo](assets/icons/common/moreinfo.svg "common-menu_logo") |
| common-notifications | ![common-notifications](assets/icons/common/notifications.svg "common-notifications") |
| common-originality | ![common-originality](assets/icons/common/originality.svg "common-notifications") |
| common-system | ![common-menu_logo](assets/icons/common/system.svg "common-menu_logo") |
| common-user | ![common-menu_logo](assets/icons/common/user.svg "common-menu_logo") |
| common-view | ![common-menu_logo](assets/icons/common/view.svg "common-menu_logo") |
| instrument-fa | ![instrument-fa](assets/icons/instrument/fa.svg "instrument-fa") |
| instrument-fr | ![instrument-fr](assets/icons/instrument/fr.svg "instrument-fr") |
| instrument-ks | ![instrument-ks](assets/icons/instrument/ks.svg "instrument-ks") |
| instrument-plag | ![instrument-plagiarism](assets/icons/instrument/plag.svg "instrument-plagiarism") |
| instrument-plagiarism | ![instrument-plagiarism](assets/icons/instrument/plagiarism.svg "instrument-plagiarism") |
| instrument-vr | ![instrument-vr](assets/icons/instrument/vr.svg "instrument-vr") |
| role-admin | ![common-menu_logo](assets/icons/role/admin.svg "common-menu_logo") |
| role-data | ![common-menu_logo](assets/icons/role/data.svg "common-menu_logo") |
| role-instructor | ![common-menu_logo](assets/icons/role/instructor.svg "common-menu_logo") |
| role-learner | ![common-menu_logo](assets/icons/role/learner.svg "common-menu_logo") |
| role-legal | ![common-menu_logo](assets/icons/role/legal.svg "common-menu_logo") |
| role-send | ![common-menu_logo](assets/icons/role/send.svg "common-menu_logo") |
| role-superadmin | ![common-menu_logo](assets/icons/role/superadmin.svg "common-menu_logo") |
| sensor-assessment | ![sensor-assessment](assets/icons/sensor/assessment.svg "sensor-assessment") |
| sensor-camera | ![sensor-camera](assets/icons/sensor/camera.svg "sensor-camera") |
| sensor-keyboard | ![sensor-keyboard](assets/icons/sensor/keyboard.svg "sensor-keyboard") |
| sensor-microphone | ![sensor-microphone](assets/icons/sensor/microphone.svg "sensor-microphone") |


### Status values:
| Value |
|---|
| success |
| info |
| error |
| warning |
| disabled |

### Fill values:
| Value |
|---|
| none |
| full |

In Nebular Icon Pack the fill attribute is renamed in "data-fill":


### Parameters:

| Parameter | Type | Is optional? | Default  |
|---|---|---|---|
| icon | string | false | empty string |
| status | string | true | empty string |
| width | integer | true | null |
| height | integer | true | null |
| marginLeft | integer | true | null |
| marginRight | integer | true | null |
| marginTop | integer | true | null |
| fill | string | true | null |


## Use as Nebular Icon Pack: NbTeSLAIconsModule

### Install package:
``` 
    npm install @tesla-ce/icons --save
```

###  In app.module.ts add:
``` js
import {NbTeSLAIconsModule} from '@tesla-ce/icons/src/lib/nebular.icons.module';
import {NbIconModule} from '@nebular/theme';
@NgModule({
    imports: [
        ...,
        NbIconModule,
        NbTeSLAIconsModule
    ]
})
```
###  In tsconfig.lib.json add in compilerOptions:
``` json
    compilerOptions: [
        ...,
        "resolveJsonModule": true,
        "esModuleInterop": true
    ]  
```

### In tsconfig.app.json add in include section:
``` js
    include: [
       ...,
        "../node_modules/@tesla-ce/icons/src/lib/nebular.icons.module.ts"
    ]
```
### Import in styles-custom.scss:
``` scss
@import '../../../../node_modules/@tesla-ce/icons/src/lib/icons.component';
```
### In your template .html you can use like this:

``` html
    <nb-icon icon="common-connection" pack="tesla" status="error" data-fill="full"></nb-icon>
```

The icon possible values as the same in "Icon values" table. 


