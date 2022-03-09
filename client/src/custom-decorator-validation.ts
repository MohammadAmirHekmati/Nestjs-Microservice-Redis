import {registerDecorator, ValidationArguments, ValidationOptions} from "class-validator";

export function IsBiggerThanTen(property:number,validationOptions:ValidationOptions)
{
    return function (object:Object,propertyName:string) {
        registerDecorator({
            name:"IsBiggerThanTen",
            target:object.constructor,
            propertyName:propertyName,
            constraints:[property],
            options:validationOptions,
            validator:{

                calculate(value:any,args:ValidationArguments)
                {
                    const [relatedPropertyName]=args.constraints
                    const relatedValue=(args.object as any)[relatedPropertyName]
                    return
                }
            }
        })
    }
}