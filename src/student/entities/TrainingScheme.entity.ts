import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class TrainingScheme {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  majorId: number

  @Column({
    nullable: true
  })
  majorName: string

  @Column()
  grade: string

  @Column({
    nullable: true
  })
  department: string
}
