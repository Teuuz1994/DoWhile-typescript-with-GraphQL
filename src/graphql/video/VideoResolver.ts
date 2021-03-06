import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

import Video from './Video'
import VideoSchema from '../../models/VideoSchema'

@InputType()
class VideoInput {
  @Field()
  _id: string

  @Field()
  description: string

  @Field()
  name: string

  @Field()
  category: string
}

@Resolver()
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find()

    return videos
  }

  @Mutation(() => Video)
  async createVideo(
    @Arg('videoInput')
    videoInput: VideoInput
  ) {
    const video = await VideoSchema.create(videoInput)

    return video
  }
}

export default VideoResolver