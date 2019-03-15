---
title: Controllers
module: HTTP
---
## Section 1

Lorem [I'm an inline-style link](https://www.google.com) sit amet, `consectetur adipiscing elit`. Nullam finibus sapien in dui cursus blandit vel sed tortor. *Sed vitae erat* id **turpis** semper malesuada ~~eu nec nulla. Sed et~~ risus ante. Nullam tortor nunc, aliquet in turpis in, fringilla cursus arcu. Fusce ac rutrum arcu. Cras viverra et sapien id malesuada. Aenean malesuada, elit ut posuere auctor, sapien lorem condimentum sapien, ac sagittis arcu diam at libero. Sed justo justo, ornare non ligula in, blandit pretium tortor. Vivamus ac feugiat risus, at maximus purus. Sed sit amet molestie leo, lobortis fringilla lorem. Cras id tristique libero. Fusce egestas est nec bibendum mattis. Nam sed nulla elementum, placerat mauris eu, tincidunt purus.

### Time for some other stuff

Sed aliquet vulputate diam congue tincidunt. Aenean nec eros sem.

#### Lists

- hello world
- hello world
- hello world
  - nested list
  - another
- hello world

#### Numbered lists

1. hello
2. world
3. goodbye

### More sub sections

Sed aliquet vulputate diam congue tincidunt. Aenean nec eros sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id scelerisque dolor. Curabitur consequat sagittis ultrices. Donec metus eros, dignissim in consequat ut, maximus at justo. Sed vitae semper elit, sed condimentum magna. Aenean a tortor vel velit efficitur ultrices. Sed in dictum ex. Praesent orci nulla, facilisis nec ornare ultricies, mollis at nulla. Vestibulum accumsan nulla vel mi faucibus, consequat finibus neque mollis. Aenean molestie, sem quis lobortis lacinia, enim sem malesuada odio, non viverra est neque vel libero.

```typescript
export class CreateBranchController extends EndpointController {
  public inputValidator = {
    body: isObject({
      name: notEmpty,
    }),
    headers: {
      authorization: combineValidators(
        isAuthenticationString,
        isValidBearerToken
      ),
    },
    query: {},
    params: {
      company_id: isUUID,
    },
    meta: {},
  };

  public outputValidator = isBranch;

  public constructor(
    @inject(BranchService) private branchService: BranchService,
    @inject(CompanyService) private companyService: CompanyService,
  ) {
    super();
  }

  public async handle(
    input: ControllerInput<CreateBranchController>,
  ): Promise<ControllerOutput<CreateBranchController>> {
    const company = await this.companyService.getAsUser(
      input.params.company_id,
      input.headers.authorization.userId,
    );
    if (company === undefined) {
      throw new EntityNotFoundError('Company');
    }

    return await this.branchService.create(input.body.name, company.id);
  }
}
```

## Section 2

Mauris ac tortor finibus eros auctor posuere sed in purus. Nulla ullamcorper tincidunt mollis. Etiam porta leo non lectus luctus elementum. Quisque eu enim justo. Nullam varius erat eget nisl pellentesque, id eleifend purus pulvinar. Cras condimentum accumsan lectus. Sed interdum mauris a interdum tincidunt. Integer sapien arcu, varius eu mi quis, commodo volutpat est. Pellentesque hendrerit dapibus erat, eu tristique orci sodales a. Suspendisse ac hendrerit eros, a tempor lacus.

Cras faucibus cursus viverra. Vivamus tincidunt libero posuere purus viverra tincidunt. Vestibulum pulvinar tortor a ex euismod, ut consectetur neque condimentum. Donec nisi augue, luctus a malesuada quis, sollicitudin fermentum neque. Ut ac euismod metus. Mauris consequat est a massa ultrices molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Maecenas vel tristique mauris. Maecenas in dapibus magna. Aenean luctus ornare augue, vel bibendum neque mattis a. Nullam ultricies eros sit amet tellus porta, quis scelerisque nisl rutrum. Praesent ultrices enim enim, sed rutrum lectus dapibus tempor. Mauris nec lacus quam. Quisque in sem porttitor, venenatis lectus at, egestas turpis. Pellentesque sed elit venenatis, hendrerit leo ut, molestie sapien. Mauris vitae sem gravida, ultricies elit aliquet, porttitor dui. Quisque pretium orci purus, at molestie quam fringilla vel. Quisque quis congue nisl. Sed odio nibh, interdum at elit in, placerat finibus justo. Nullam malesuada neque enim, at efficitur nisl maximus a. Duis at tincidunt lacus, a placerat nisl. Nunc sed fringilla est. Fusce sed commodo dui.

## Section 3

Mauris ac tortor finibus eros auctor posuere sed in purus. Nulla ullamcorper tincidunt mollis. Etiam porta leo non lectus luctus elementum. Quisque eu enim justo. Nullam varius erat eget nisl pellentesque, id eleifend purus pulvinar. Cras condimentum accumsan lectus. Sed interdum mauris a interdum tincidunt. Integer sapien arcu, varius eu mi quis, commodo volutpat est. Pellentesque hendrerit dapibus erat, eu tristique orci sodales a. Suspendisse ac hendrerit eros, a tempor lacus.

## Section 4

Cras faucibus cursus viverra. Vivamus tincidunt libero posuere purus viverra tincidunt. Vestibulum pulvinar tortor a ex euismod, ut consectetur neque condimentum. Donec nisi augue, luctus a malesuada quis, sollicitudin fermentum neque. Ut ac euismod metus. Mauris consequat est a massa ultrices molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.

## Section 5

Maecenas vel tristique mauris. Maecenas in dapibus magna. Aenean luctus ornare augue, vel bibendum neque mattis a. Nullam ultricies eros sit amet tellus porta, quis scelerisque nisl rutrum. Praesent ultrices enim enim, sed rutrum lectus dapibus tempor. Mauris nec lacus quam. Quisque in sem porttitor, venenatis lectus at, egestas turpis. Pellentesque sed elit venenatis, hendrerit leo ut, molestie sapien. Mauris vitae sem gravida, ultricies elit aliquet, porttitor dui. Quisque pretium orci purus, at molestie quam fringilla vel. Quisque quis congue nisl. Sed odio nibh, interdum at elit in, placerat finibus justo. Nullam malesuada neque enim, at efficitur nisl maximus a. Duis at tincidunt lacus, a placerat nisl. Nunc sed fringilla est. Fusce sed commodo dui.
