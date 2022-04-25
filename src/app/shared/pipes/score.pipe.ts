import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): string {
    let scoreText = '';
    if (value < 0.4) {
      scoreText = 'BAJO';
    } else if (value < 0.7) {
      scoreText = 'MEDIO';
    } else {
      scoreText = 'ALTO';
    }
    return scoreText;
  }

}
